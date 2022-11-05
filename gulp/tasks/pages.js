import { src, dest } from 'gulp';
import browsersync from 'browser-sync';
import include from 'gulp-file-include';
import { paths } from '../../gulpfile.babel';

const pages = () => {
  return src(paths.pages.src)
    .pipe(
      include({
        prefix: '@@',
        basepath: '@file',
      }),
    )
    .pipe(dest(paths.pages.dist))
    .pipe(browsersync.stream());
};

export default pages;
