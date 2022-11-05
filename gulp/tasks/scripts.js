import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import browsersync from 'browser-sync';
import { paths } from '../../gulpfile.babel';

const scripts = () => {
  return src(paths.scripts.src)
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      }),
    )
    .pipe(dest(paths.scripts.dist))
    .pipe(browsersync.stream());
};

export default scripts;
