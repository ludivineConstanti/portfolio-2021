import { connect } from "react-redux";
import Component from "./Component";
import { updateArrIllu } from "redux/slices/pixijiSlice";

const mapStateToProps = (state) => ({
  arrIlluFormatted: state.pixiji.rabbitOnMoon.currentKanjis,
});

const mapDispatchToProps = (dispatch) => ({
  updateArrIllu: (payload) => dispatch(updateArrIllu(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
