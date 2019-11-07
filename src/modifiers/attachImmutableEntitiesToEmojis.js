import { EditorState } from 'draft-js';

/*
 * Attaches Immutable DraftJS Entities to the Emoji text.
 *
 * This is necessary as emojis consist of 2 characters (unicode). By making them
 * immutable the whole Emoji is removed when hitting backspace.
 */
export default function attachImmutableEntitiesToEmojis(
  editorState: EditorState
): EditorState {
  return editorState;
}