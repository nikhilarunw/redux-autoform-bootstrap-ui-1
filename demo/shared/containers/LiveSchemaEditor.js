import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LiveSchemaEditor from '../components/LiveSchemaEditorView';
import { change, initialize } from 'redux-form-v5';
import { setInlineFieldLayout, setStackedFieldLayout, setEditComponentFactory, setDetailsComponentFactory, updateForm } from '../redux/actions/FormOptionsActions';

const reduxFormActions = { change, initialize };
const formOptionsActions = { setInlineFieldLayout, setStackedFieldLayout, setEditComponentFactory, setDetailsComponentFactory, updateForm };

const mapStateToProps = (state) => ({     
    metaForm: state.form.meta,
    formOptions: state.formOptions
});

const mapDispatchToProps = (dispatch) => ({
    reduxFormActions: bindActionCreators(reduxFormActions, dispatch), 
    formOptionsActions: bindActionCreators(formOptionsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveSchemaEditor);