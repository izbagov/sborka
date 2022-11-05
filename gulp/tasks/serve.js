import gulp from 'gulp';
import browsersync from 'browser-sync';
import pages from './pages';
import scripts from './scripts';
import styles from './styles';
import sprites from './sprites';
import images from './images';
import fonts from './fonts';
import { paths } from '../../gulpfile.babel';

const serve = (cb) => {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true,
  });

  gulp.watch(paths.pages.watch, gulp.parallel(pages));
  gulp.watch(paths.styles.watch, gulp.parallel(styles));
  gulp.watch(paths.scripts.watch, gulp.parallel(scripts));
  gulp.watch(paths.sprites.watch, gulp.parallel(sprites));
  gulp.watch(paths.images.watch, gulp.parallel(images));
  gulp.watch(paths.fonts.watch, gulp.parallel(fonts));
  cb();
};

export default serve;
