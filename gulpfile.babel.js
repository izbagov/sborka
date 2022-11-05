import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import scripts from './gulp/tasks/scripts';
import pages from './gulp/tasks/pages';
import styles from './gulp/tasks/styles';
import serve from './gulp/tasks/serve';
import sprites from './gulp/tasks/sprites';
import images from './gulp/tasks/images';
import fonts from './gulp/tasks/fonts';
import favicons from './gulp/tasks/favicon';

export const paths = {
  pages: {
    src: ['./src/pages/**/*.html', './src/pages/*.html'],
    dist: './dist/',
    watch: ['./src/blocks/**/*.html', './src/pages/**/*.html'],
  },
  scripts: {
    src: './src/js/app.js',
    dist: './dist/js/',
    watch: ['./src/blocks/**/*.js', './src/js/**/*.js'],
  },
  styles: {
    src: './src/styles/main.scss',
    dist: './dist/styles/',
    watch: ['./src/blocks/**/*.scss', './src/styles/**/*.scss'],
  },
  sprites: {
    src: './src/img/sprites/*.svg',
    dist: './dist/img/sprites/',
    watch: './src/img/sprites/*.svg',
  },
  images: {
    src: [
      './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
    ],
    dist: './dist/img/',
    watch: './src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}',
  },
  fonts: {
    src: './src/fonts/**/*.{woff,woff2}',
    dist: './dist/fonts/',
    watch: './src/fonts/**/*.{woff,woff2}',
  },
  favicons: {
    src: './src/img/favicon/*.{jpg,jpeg,png,gif}',
    dist: './dist/img/favicons/',
  },
};

const development = gulp.series(
  clean,
  gulp.parallel(pages, styles, images, sprites, scripts, favicons, fonts),
  gulp.parallel(serve),
);
export const prod = gulp.series(
  clean,
  gulp.parallel(pages, styles, images, sprites, scripts, favicons, fonts),
);

export default development;
