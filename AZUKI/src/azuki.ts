import { Transfer as TransferEvent, Azuki } from "../generated/AZUKI/AZUKI";
import { Azuki as AzukiSchema, Transfer, Property } from "../generated/schema";

import { ipfs, json, JSONValue, log } from "@graphprotocol/graph-ts";

export function handleTransfer(event: TransferEvent): void {
  let transfer = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.tokenId = event.params.tokenId;
  transfer.blockNumber = event.block.number;
  transfer.blockTimestamp = event.block.timestamp;
  transfer.transactionHash = event.transaction.hash;
  transfer.save();

  let contractAddress = Azuki.bind(event.address);
  let azuki = AzukiSchema.load(event.params.tokenId.toString());

  if (azuki == null) {
    azuki = new AzukiSchema(event.params.tokenId.toString());
    azuki.creator = event.params.to;
    azuki.tokenURI = contractAddress.tokenURI(event.params.tokenId);
  }

  azuki.newOwner = event.params.to;
  azuki.blockNumber = event.block.number;
  azuki.save();

  const ipfshash = "QmZcH4YvBVVRJtdn4RdbaqgspFU8gH6P9vomDpBVpAL3u4";
  let tokenURI = "/" + event.params.tokenId.toString();
  log.debug("The tokenURI is: {} ", [tokenURI]);

  let property = Property.load(event.params.tokenId.toString());

  if (property == null) {
    property = new Property(event.params.tokenId.toString());

    let fullURI = ipfshash + tokenURI;
    log.debug("The fullURI is: {} ", [fullURI]);

    let ipfsData = ipfs.cat(fullURI);

    if (ipfsData) {
      let ipfsValues = json.fromBytes(ipfsData);
      let ipfsValuesObject = ipfsValues.toObject();

      if (ipfsValuesObject) {
        let image = ipfsValuesObject.get("image");
        let attributes = ipfsValuesObject.get("attributes");

        let attributeArray: JSONValue[];
        if (image) {
          property.image = image.toString();
        }
        if (attributes) {
          attributeArray = attributes.toArray();

          for (let i = 0; i < attributeArray.length; i++) {
            let attributeObject = attributeArray[i].toObject();

            let trait_type = attributeObject.get("trait_type");
            let value_type = attributeObject.get("value");

            let trait: string;
            let value: string;

            if (trait_type && value_type) {
              trait = trait_type.toString();
              value = value_type.toString();

              if (trait && value) {
                if (trait == "Type") {
                  property.type = value;
                }

                if (trait == "Hair") {
                  property.hair = value;
                }

                if (trait == "Headgear") {
                  property.headgear = value;
                }

                if (trait == "Face") {
                  property.face = value;
                }

                if (trait == "Neck") {
                  property.neck = value;
                }

                if (trait == "Clothing") {
                  property.clothing = value;
                }

                if (trait == "Eyes") {
                  property.eyes = value;
                }

                if (trait == "Mouth") {
                  property.mouth = value;
                }

                if (trait == "Background") {
                  property.background = value;
                }

                if (trait == "Ear") {
                  property.ear = value;
                }

                if (trait == "Offhand") {
                  property.offhand = value;
                }

                if (trait == "Special") {
                  property.special = value;
                }
              }
            }
          }
        }
      }
    }
  }

  property.save();
}
