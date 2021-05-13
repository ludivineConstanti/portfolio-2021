import { connect } from "react-redux";
import Component from "./Component";
import { updateValDino404 } from "redux/slices/dino404Slice";

const mapStateToProps = (state) => ({
  gameState: state.dino404.gameState,
  score: state.dino404.score,
});

const mapDispatchToProps = (dispatch) => ({
  updateValDino404: (payload) => dispatch(updateValDino404(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
