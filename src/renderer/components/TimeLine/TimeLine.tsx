import AppFrame from '../AppFrame/AppFrame';
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer';
import Log from './Log/Log';

import { timeLineStub } from '../../stub/timeLineStub';

const TimeLine = () => {
  return (
    <div>
      <AppFrame pageName="Time Line">
        {timeLineStub.map((log) => <Log 
                                        key={log.id}
                                        css={{ marginBottom: '3rem' }}
                                        log={log} />)}
      </AppFrame>
      <ControlPanelContainer>
      </ControlPanelContainer>
    </div>
  );
};

export default TimeLine;
