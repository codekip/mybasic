const content = document.getElementById('content');

const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
  )
    let result = await repos.json()

  const markup = result
    .map(
      (repo) => `
            <li>
                <a href="${repo.html_url}>${repo.name}</a>
                (⭐ ${repo.stargazers_count})
            </li>
      `,
    )
    .join('');

  content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos('codekip');
