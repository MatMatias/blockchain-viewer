import { bindActionCreators } from "redux";
import { store } from "./store";

const doSetDifficulty = (payload: number) => ({
  type: "blockchain/setDifficulty",
  payload: { difficulty: payload },
});

const doAddBlock = (payload: string) => ({
  type: "blockchain/addBlock",
  payload: { blockData: payload },
});

const { dispatch } = store;

export const boundBlockchainActions = bindActionCreators(
  {
    setDifficulty: doSetDifficulty,
    addBlock: doAddBlock,
  },
  dispatch
);
