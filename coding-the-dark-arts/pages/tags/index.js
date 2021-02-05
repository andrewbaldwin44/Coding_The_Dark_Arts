import { useEffect } from 'react';
import { connect } from 'react-redux';

import Tags from '../../components/tags/tags.component';
import { TAG_ACTIONS } from '../../components/tags/tags.actions';

function TagsPage({ fetchAllTags, tags }) {
  useEffect(() => {
    fetchAllTags();
  }, []);

  if (tags) {
    return <Tags tags={tags} />;
  }

  return null;
}

const storeConnector = ({ tags }) => ({ tags: tags.tags });
const actionCreators = {
  fetchAllTags: TAG_ACTIONS.fetchAll,
};

export default connect(storeConnector, actionCreators)(TagsPage);
