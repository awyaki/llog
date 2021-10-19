import { VFC } from 'react';
import AppFrame from '../AppFrame/AppFrame';
import { Reviews } from './types';
import ReviewCard from './ReviewCard/ReviewCard';


type Props = {
  reviews: Reviews; 
};

const Review: VFC<Props> = ({ reviews }) => {

  return (
    <AppFrame pageName="Review">
      <div css={{ overflowY: 'scroll' }}>
        {reviews.map((review) => <ReviewCard
                                  layout={{ marginBottom: '3rem' }}
                                  key={review.id}
                                  contentsName={review.contentsName}
                                  blocks={review.blocks}
                                  />)}
      </div>
    </AppFrame>
  );
};

export default Review;
