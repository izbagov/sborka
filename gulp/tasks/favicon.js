import { paths } from '../../gulpfile.babel';
import gulp from 'gulp';
import faviconsGulp from 'gulp-favicons';
import debug from 'gulp-debug';

const favicons = () => {
  return gulp
    .src(paths.favicons.src)
    .pipe(
      faviconsGulp({
        icons: {
          appleIcon: true,
          favicons: true,
          online: false,
          appleStartup: false,
          android: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
      }),
    )
    .pipe(gulp.dest(paths.favicons.dist))
    .pipe(
      debug({
        title: 'Favicons',
      }),
    );
};

export default favicons;
