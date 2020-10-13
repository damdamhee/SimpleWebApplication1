import useEntry from "./useEntry.js";
import useHeader from "./useHeader.js";
import useDivider from "./useDivider.js";
import { usePeopleTable, useAddPersonBtn } from "./usePeopleTable.js";

const entryDiv = useEntry();
const header = useHeader();
const divider = useDivider();
const peopleTable = usePeopleTable();
const addPersonBtn = useAddPersonBtn();

entryDiv.appendChild(header);
entryDiv.appendChild(addPersonBtn);
entryDiv.appendChild(divider);
entryDiv.appendChild(peopleTable);
