import { Block } from "./block";

export class Blockchain {
  chain: Block[];
  difficulty: number;

  constructor(difficulty: number) {
    this.chain = [];
    this.difficulty = difficulty;
  }

  getLatestBlock() {
    if (this.chain.length == 0) {
      throw "Blockchain does not have any blocks";
    }
    return this.chain[this.chain.length - 1];
  }

  addBlock(blockData: string) {
    if (this.chain.length == 0) {
      const genesisBlock = new Block(blockData);
      genesisBlock.mineBlock(this.difficulty);
      this.chain.push(genesisBlock);
    } else {
      const genericBlock = new Block(blockData);
      genericBlock.parentHash = this.getLatestBlock().hash;
      genericBlock.mineBlock(this.difficulty);
      this.chain.push(genericBlock);
    }
  }
}
