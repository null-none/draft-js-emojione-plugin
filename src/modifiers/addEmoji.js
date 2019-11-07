import { EditorState, AtomicBlockUtils } from 'draft-js';
import emojione from 'emojione';

// This modifier can inserted emoji to current cursor position (with replace selected fragment),
// or replaced emoji shortname like ":thumbsup:". Behavior determined by `Mode` parameter.
const Mode = {
  INSERT: 'INSERT', // insert emoji to current cursor position
  REPLACE: 'REPLACE', // replace emoji shortname
};

const addEmoji = (editorState, emojiShortName, mode = Mode.INSERT) => {

  var objEmojji = new DOMParser().parseFromString(emojione.toImage(emojiShortName), "text/xml");

  const urlType = 'IMAGE';
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    urlType,
    'IMMUTABLE',
    {src: objEmojji.firstChild.getAttribute("src"),
     alt: objEmojji.firstChild.getAttribute("alt") }
  );  
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  );
  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  );
};

export default addEmoji;
export { Mode };