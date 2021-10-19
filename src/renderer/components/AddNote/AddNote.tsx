import { useState } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import EditNote from './EditNote/EditNote';
import EditBlocks from '../EditBlocks/EditBlocks';
import EditTags from './EditTags/EditTags';
import { contentsList } from '../../stub/contentsStub';

const AddNote = () => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const contentsStub = contentsList.filter((contents) => contents.id === contentsid)[0]; 
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  
  return (
    <Switch>
      <Route exact path={`/note/add/${contentsid}`}>
        <EditNote
          blocks={contentsStub.blocks.filter((block) => selectedBlocks.includes(block.id))}
          contents={contentsStub}
          tags={tags}
        />
      </Route>
      <Route path={`/note/add/${contentsid}/edit/blocks`}>
        <EditBlocks
          contentsId={contentsStub.id}
          blocks={contentsStub.blocks}
          selectedBlocks={selectedBlocks}
          setSelectedBlocks={setSelectedBlocks}
        />
      </Route>
      <Route path={`/note/add/${contentsid}/edit/tags`}>
        <EditTags 
          contentsId={contentsStub.id}
          tags={tags}
          setTags={setTags}
        />
      </Route>
    </Switch>
  );
};

export default AddNote
