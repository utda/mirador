import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend';
import * as actions from '../state/actions';
import { ThumbnailCanvasGrouping } from '../components/ThumbnailCanvasGrouping';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ThumbnailCanvasGrouping
 * @private
 */
const mapDispatchToProps = {
  setCanvas: actions.setCanvas,
};

/**
 * Styles for withStyles HOC
 */
const styles = theme => ({
  canvas: {
    '&$currentCanvas': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    border: '2px solid transparent',
    boxSizing: 'border-box',
    color: theme.palette.common.white,
    cursor: 'pointer',
  },
  canvasThumbLabel: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    bottom: '5px',
    left: '0px',
    position: 'absolute',
  },
  currentCanvas: {
  },
  root: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  title: {
    color: '#ffffff',
  },
});

const enhance = compose(
  withStyles(styles),
  withTranslation(),
  connect(null, mapDispatchToProps),
  withPlugins('ThumnailNavigation'),
);

export default enhance(ThumbnailCanvasGrouping);
