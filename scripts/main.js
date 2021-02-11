import {OfficerList} from "./officers/OfficerList.js"
import {CriminalsList} from "./criminals/CriminalList.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import {OfficerSelect} from "./officers/OfficerSelect.js"
import {NoteForm} from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { ShowWitnessButton } from "./witnesses/ShowWitnessButton.js"
import {getCriminals} from "./criminals/CriminalProvider.js"




NoteForm()
OfficerList()
CriminalsList()
ConvictionSelect()
OfficerSelect()
ShowNoteButton()
ShowWitnessButton()
getCriminals().then(NoteForm)
