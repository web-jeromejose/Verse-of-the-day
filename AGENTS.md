<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Plan content (all 30 days) lives in `src/data/verses.ts`; pages read from it, never hardcode verse copy in routes. Why: one place to edit wording.
- Store biblical context references with each verse and render paragraph breaks from the shared copy. Why: keep supporting passages and readable explanations consistent across views.
- Reader progress, favorites and notes are stored on-device via `src/lib/progress.ts` (localStorage, read after hydration). Why: no accounts needed.
- Audio page uses the free public-domain BSB audio + per-verse timings from bible.helloao.org (`src/lib/audio.ts`), fetched in the browser. Why: no API key or hosting cost.
