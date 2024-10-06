import { Link } from 'react-router-dom';
import { PATHS } from '../../../../constants/routes';
import SectionBody from '../../../layouts/showcaseLayouts/Section/SectionBody/SectionBody';
import Placeholder from '../../../UI/Placeholder/Placeholder';
import classes from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <SectionBody>
      <div className={classes['not-found']}>
        <Placeholder text={'Такой страницы нет'} />
        <span className={classes.title}>404</span>

        <div className={classes['wrapper']}>
          <span>Перейти</span>
          <div className={classes['link-wrapper']}>
            <Link to={PATHS.showcase} className={classes.link}>
              На главную
            </Link>
          </div>
        </div>
      </div>
    </SectionBody>
  );
};

export default NotFound;
