# SPAROWW — White and blue portfolio

English static portfolio using only the SPAROWW public identity. White, light grey faceted geometry and the original cyan-to-blue logo define the visual theme.

## Page and behavior

- A large, simple original logo appears alone in the hero. The former portrait card, torus, floating notes and WebGL scene have been removed.
- The four collections remain in this order: Social Media Designs, Sports Designs, Logos Design, Branding. Each currently opens https://www.behance.net/sparoww.
- The discipline band uses two equal groups for a seamless, continuous 24-second desktop loop (22 seconds on mobile). Each phrase has its own space, with the original small logo as a separator.
- About Me displays the original portrait in front of the original logo.
- The complete Expertise section and its navigation entries have been removed.
- Start a conversation opens https://wa.me/212642746093 directly. The separate email contact remains available.
- Motion pause and reduced-motion preferences control the ticker and the scroll effects. Page scrolling stays native.

## Editable files

- `dist/index.html`: content, navigation, artwork composition and contact links.
- `dist/styles.css`: base responsive layout.
- `dist/light-theme.css`: final theme, typography, scroll reveals, ticker and portrait composition.
- `dist/app.js`: menu, motion settings, pointer tilt and restrained scroll depth.
- `dist/projects.js`: future final collection thumbnails and exact Behance project links.

Set `thumbnail`, `thumbnailAlt` and `behanceUrl` in `dist/projects.js` when final assets are supplied. The thumbnail replaces the illustrated collection cover and its preview label. Do not invent project URLs.

## Portrait and extraction

The displayed portrait source, `dist/assets/sparoww-portrait.png`, is still a byte-identical copy of the uploaded `ejtjejjj(2).png`. No generated RGB face is displayed.

The extraction asset is saved at `dist/assets/sparoww-portrait-mask.png`. It was created with the built-in Imagegen tool in background-extraction mode. Only its alpha channel is applied to the original portrait through CSS. The full white shirt stays opaque. This avoids the broad transparency through the shirt in the older cutout.

Final extraction prompt:

> Use case: background-extraction. Asset type: a precise transparent portrait cutout for a website. Edit target: the attached original portrait, canvas 1639x2048 (4:5). Remove ONLY the white and pale-grey geometric background outside the person. Keep the exact original face, hair, identity, skin texture, expression, pose, scale, position, entire white collared shirt, shoulders and torso unchanged. The complete shirt and body MUST remain fully opaque, including all white fabric, with no transparent holes and no feathering through the shirt. Extract a clean, natural silhouette at the fine hair strands, ears, jaw and shoulders. Keep the original image canvas and framing, no recentering, no zoom, no crop, no padding changes. Do not redraw, beautify, smooth or relight the person. Do not add shadows, borders, glow or new objects. Output a genuine transparent PNG. Preserve original subject pixels as closely as possible; only the alpha channel around the subject should change.

## Verification

Checked JavaScript syntax, local assets, CSS asset paths, anchors, IDs, removal of Expertise and star glyphs, the direct WhatsApp CTA, collection order, Behance destinations and the unchanged original portrait. Browser QA covered desktop plus 390, 320 and 820 px responsive frames with no horizontal overflow. Verified the actual ticker transform changes during playback and stays fixed while paused, then resumes. Inspected the portrait and original logo composition at desktop and mobile sizes. No page errors were reported during these checks.

The tracked `.openai/hosting.json` preserves the Site identity and static output. Deployment retains the existing private audience.

## Supplied collection covers

The final uploaded covers are installed without altering their pixels: `Untitled-1.png` → Social Media, `HEGZEGZEGG.png` → Sports, `gezgzgge.png` → Logos, `JEGEZGG.png` → Branding. They are stored in `dist/assets/project-*.png` and configured in `dist/projects.js`. The cards use the original 4:3 aspect ratio to show all lettering. Preview badges are hidden by the existing thumbnail behavior. Behance destinations remain the supplied profile until exact project links are provided.
