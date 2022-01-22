import { VFC, useState, useCallback, useContext } from 'react';

import { ContentContext } from '~/components';

import { getContent } from '~/api';

import { container } from './style/container';

import { ContentBlocksForm } from '~/components';

import { EditIcon } from '~/components';

type Props = {
  id: number;
  created: string;
  blocks: number;
};

export const BasicInfo: VFC<Props> = ({ 
  id, 
  created, 
  blocks, 
}) => {
  const [isUpsertBlocksMode, setIsUpsertBlocksMode] = useState(false);
  const { setContent } = useContext(ContentContext);

  const onChangeNormalMode = useCallback(async () => {
    const result = await getContent(id);
    setContent(result);
    setIsUpsertBlocksMode(false);
  }, [id]);
  
  const onChangeEditMode = useCallback(() => {
    setIsUpsertBlocksMode(true);
  }, []);

  return (
    <ul css={container}>
      <li>Created time：{created}</li>
      <li css={{ display: 'flex', alignItems: 'flex-start', height: '48px' }}>
        <span>Blocks：</span>
        {isUpsertBlocksMode 
                    ? <ContentBlocksForm 
                        id={id} 
                        maxUnitNumber={blocks} 
                        onSubmit={onChangeNormalMode} 
                        onClose={onChangeNormalMode}/> 
                    : <div css={{ display: 'flex' }}>
                        <span css={{ marginRight: '10px' }}>{blocks}</span>
                        <button css={{ display: 'flex', alignItems: 'center' }} onClick={onChangeEditMode}><EditIcon /></button>
                      </div>}
      </li>
    </ul>
  );
};
