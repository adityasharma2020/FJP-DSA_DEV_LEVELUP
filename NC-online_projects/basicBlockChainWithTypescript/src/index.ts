import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

//here we are creating a block
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    // so , when we get the data we hash the data
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  // this function use  the library "cryto" to convert  our data into hash.
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash} ${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }

  public getBlocks(){
    return [...this.blocks];
  }
}




const blockchain = new BlockChain();
blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("four one");
blockchain.addBlock("fifth one");
blockchain.getBlocks().push(new Block("xxx",111,"hackedddd"));

console.log(blockchain.getBlocks());