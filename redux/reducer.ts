import { Blockchain } from "../blockchain";

const initialState = {
  blockchain: new Blockchain(0),
};

interface PayloadShape {
  difficulty?: number;
  blockData?: string;
}

export function reducer(state = initialState, action: { type: string; payload: PayloadShape }) {
  let blockchain: Blockchain;

  switch (action.type) {
    case "blockchain/initializeBlockchain":
      blockchain = new Blockchain(action.payload.difficulty!);
      return {
        ...state,
        blockchain: blockchain,
      };
    case "blockchain/addBlock":
      blockchain = state.blockchain;
      blockchain.addBlock(action.payload.blockData!);
      return {
        ...state,
        blockchain: blockchain,
      };
    default:
      return state;
  }
}
