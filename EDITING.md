# How to update the SFRL website

You never need to touch HTML. Every list on the site comes from a YAML file in `_data/`.
After you save a change on GitHub, the site rebuilds itself in about a minute.

There are three ways to edit, from easiest to most flexible:

1. **Form editor (no YAML at all).** Go to <https://app.pagescms.org>, sign in with GitHub, and open
   this repository. You get forms for News, Publications, Projects, Members, and Alumni, plus image upload.
   The forms are defined in `.pages.yml`.
2. **GitHub web editor.** Open the file on github.com, click the pencil icon, edit, and click
   **Commit changes**. Choose "Create a new branch and start a pull request" if you want someone to review first.
3. **Locally** with git, if you are comfortable with it.

## YAML in 30 seconds

- Each entry starts with `- ` at the left edge. Fields under it are indented two spaces.
- Use spaces, never tabs.
- Wrap a value in double quotes if it contains a colon (`:`) or starts with a special character.
- To delete an entry, delete its whole block (from its `- ` line to just before the next `- `).

## Add a publication

Open `_data/publications.yml` and paste a new block at the top:

```yaml
- type: journal              # journal | conference | talk | patent
  year: 2027
  authors: Doe, J., Sapkota, R., & Karkee, M.
  title: "Your paper title: with a colon needs quotes"
  venue: Journal of Field Robotics, 44(2), 100-120
  doi: 10.1002/rob.12345     # optional, without https://doi.org/
  url: https://...           # optional extra link
  code: https://github.com/... # optional
  featured: true             # optional, shows it on the home page
```

The page groups papers by year and counts them automatically. Names listed in
`_data/bold_authors.yml` are bolded, so add new students there (`- Doe, J.`).

## Add or remove a lab member

Open `_data/members.yml`. Copy an existing block and change it:

```yaml
- name: Jane Doe
  role: PhD Student
  affiliation: Oregon State University
  photo: /assets/img/people/jane-doe.jpg   # optional; leave "" for initials
  keywords: [manipulation, soft robotics]
  contribution: Builds soft end effectors for green fruit thinning.
  link: https://janedoe.github.io            # optional
```

Upload photos to `assets/img/people/` (square, about 400×400 px, under 200 KB).
When someone graduates, delete their block from `members.yml` and add them to `alumni.yml`:

```yaml
- name: Jane Doe
  role: PhD Student (2027-2032)
  now: Robotics Scientist, Example Robotics
```

## Add news

Open `_data/news.yml` and add a block at the top (newest first). The home page shows the latest four.

```yaml
- date: 2027-05-01
  title: Paper accepted at ICRA
  text: One sentence on what happened.
  link: /publications/      # optional; a site page or a full https:// link
```

## Add or update a project

Open `_data/projects.yml`. `status` is `active`, `planned`, or `completed`; completed projects move to
their own section automatically, so archive rather than delete. Put images in `assets/img/projects/`.

## Change the hiring banner, email, or home-page numbers

All in `_data/lab.yml`. Set `hiring: false` to hide the banner.

## Replace the hero illustration with a photo

Put the photo at `assets/img/hero.jpg` (landscape, about 1600 px wide), then in `_config.yml` set:

```yaml
hero_image: /assets/img/hero.jpg
hero_alt: SFRL robot thinning apples in a commercial orchard
```

## If the site does not update

Open the repo's **Actions** tab. A red ✗ means the build failed, usually from a YAML indentation
mistake or a missing quote; the log names the file and line. Fix it and commit again.
