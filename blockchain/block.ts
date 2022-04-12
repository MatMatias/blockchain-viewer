import CryptoES from "crypto-es";

export class Block {
  timestamp: number;
  parentHash: string;
  nonce: number;
  data: string;
  hash: string;

  constructor(data: string) {
    this.timestamp = Date.now();
    this.parentHash = "";
    this.nonce = 0;
    this.data = data;
    this.hash = "";
  }

  calculateHash() {
    return CryptoES.SHA256(
      this.parentHash + this.timestamp.toString() + this.nonce + JSON.stringify(this.data)
    ).toString();
  }

  mineBlock(difficulty: number) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}
