import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDir);
  const allPostsData = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '');
    const fullpath = path.join(postsDir, filename);

    const contents = fs.readFileSync(fullpath, 'utf8');
    const matterResult = matter(contents);

    return {
      id,
      ...matterResult.data,
    }
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
