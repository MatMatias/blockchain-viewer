import { Blockchain } from "../blockchain";
import type { BlockchainType } from "../blockchain/blockchain";
import type { BlockType } from "../blockchain/block";
import { AnyAction } from "redux";

interface StateShape {
  blockchain: BlockchainType;
  chain: BlockType[];
  difficulty: number;
}

// interface PayloadShape {
//   difficulty?: number;
//   blockData?: string;
// }

const initialState: StateShape = {
  blockchain: new Blockchain(0),
  chain: [],
  difficulty: 0,
};

export function reducer(state = initialState, action: AnyAction) {
  const { blockchain } = state;

  switch (action.type) {
    case "blockchain/setDifficulty":
      blockchain.difficulty = action.payload.difficulty!;
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };
    case "blockchain/addBlock":
      blockchain.addBlock(action.payload.blockData!);
      return {
        ...state,
        blockchain: blockchain,
        chain: [...blockchain.chain],
      };
    default:
      // throw new Error(`Unhandled action type ${JSON.stringify(action.type)}`);
      return {
        ...state,
      };
  }
}
