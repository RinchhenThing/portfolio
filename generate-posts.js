const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, 'src/content/posts');
const outputFile = path.join(__dirname, 'src/content/posts.json');

function generatePosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug.replace(/-/g, ' '),
      category: data.category || "General",
      date: data.date || "",
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(allPostsData, null, 2));
  console.log("✅ Blog index updated based on /posts folder.");
}

generatePosts();
