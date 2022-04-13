import { Blockchain } from "../blockchain";
import type { BlockchainType } from "../blockchain/blockchain";
import type { BlockType } from "../blockchain/block";

interface StateShape {
  blockchain: BlockchainType;
  chain: BlockType[];
  difficulty: number;
}

interface PayloadShape {
  difficulty?: number;
  blockData?: string;
}

const initialState: StateShape = {
  blockchain: new Blockchain(0),
  chain: [],
  difficulty: 0,
};

export function reducer(state = initialState, action: { type: string; payload: PayloadShape }) {
  const { blockchain } = state;

  switch (action.type) {
    case "blockchain/setDifficulty":
      blockchain.difficulty = action.payload.difficulty!;
      return {
        ...state,
        blockchain: blockchain,
        chain: [...blockchain.chain],
        difficulty: action.payload.difficulty,
      };
    case "blockchain/addBlock":
      blockchain.addBlock(action.payload.blockData!);
      return {
        ...state,
        blockchain: blockchain,
        chain: [...blockchain.chain],
        difficulty: blockchain.difficulty,
      };
    default:
      return state;
  }
}
