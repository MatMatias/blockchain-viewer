import { bindActionCreators } from "redux";
import { store } from "./store";

const doInitializeBlockchain = (payload: number) => ({
  type: "blockchain/initializeBlockchain",
  payload: { difficulty: payload },
});

const doAddBlock = (payload: string) => ({
  type: "blockchain/addBlock",
  payload: { blockData: payload },
});

const { dispatch } = store;

export const boundBlockchainActions = bindActionCreators(
  {
    initializeBlockchain: doInitializeBlockchain,
    addBlock: doAddBlock,
  },
  dispatch
);
