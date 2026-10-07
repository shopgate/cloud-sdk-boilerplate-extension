import { useState } from 'react';
import { I18n, Typography } from '@shopgate/engage/components';
import { Button } from '@shopgate/engage/components/v2';
import { makeStyles } from '@shopgate/engage/styles';

const useStyles = makeStyles({ name: 'AwesomeBanner' })(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.emphasized,
    color: theme.palette.text.primary,
  },
}));

/**
 * An example banner that is rendered below the header of the product page. It reads spacing,
 * colors and the border radius from the theme, so it follows the styling of the shop.
 */
const AwesomeBanner = () => {
  const { classes, cx } = useStyles();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div className={cx(classes.root, 'awesome-extension__banner')}>
      <Typography variant="h3" component="div">
        <I18n.Text string="awesomeExtension.banner.title" />
      </Typography>
      <Typography variant="body2">
        <I18n.Text string="awesomeExtension.banner.text" />
      </Typography>
      <Button color="primary" size="small" onClick={() => setDismissed(true)}>
        <I18n.Text string="awesomeExtension.banner.dismiss" />
      </Button>
    </div>
  );
};

export default AwesomeBanner;
