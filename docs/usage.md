<link rel="stylesheet" href="usage.css" />

# Usage

## Neumes

To display a neume, use any of the [neume components](component-list-neumes.md).

Example:

```html
<x-ison></x-ison>
```

Result: <x-ison></x-ison>

### Supporting Neumes

Supporting neumes must be written without any space between tags.

```html
<x-ison></x-ison><x-psifiston></x-psifiston>
```

Result: <x-ison></x-ison><x-psifiston></x-psifiston>

Let's see what happens when this rule is not followed.

```html
<x-ison></x-ison> <x-psifiston></x-psifiston>
```

Result: <x-ison></x-ison> <x-psifiston></x-psifiston>

Multiple supporting neumes may combined.

```html
<x-apostrofos></x-apostrofos><x-antikenoma></x-antikenoma><x-apli></x-apli>
```

Result: <x-apostrofos></x-apostrofos><x-antikenoma></x-antikenoma><x-apli></x-apli>

### Formatting the HTML for Supporting Neumes

If you wish to put neumes on different lines for the sake of readability, you may write the neumes in the following way.

<!-- prettier-ignore -->
```html
<x-ison></x-ison
><x-psifiston></x-psifiston>
```

### Martyria

For convenience, there is an `x-martyria` component that can be used to group the martyria neumes. This makes it easier to apply CSS styling to all martyria.

<!-- prettier-ignore -->
```html
<x-martyria>
    <x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below>
</x-martyria>
```

<!-- prettier-ignore -->
Result:
<x-martyria>
    <x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below>
</x-martyria>

Tempo sign components (`x-agogi-*-above`) may be combined with martyria, in which case the tempo sign is placed above the martyria.

<!-- prettier-ignore -->
```html
<x-martyria>
    <x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below
    ><x-agogi-metria-above class="agogi"></x-agogi-metria-above>
</x-martyria>
```

Result:
<x-martyria>
<x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below
    ><x-agogi-metria-above class="agogi"></x-agogi-metria-above>
</x-martyria>

## Lyrics

The `x-note` component groups neumes and lyrics together.

```html
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">To</x-lyric>
</x-note>
<x-note>
  <x-oligon></x-oligon>
  <x-lyric slot="lyric">thee,</x-lyric>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">O</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric slot="lyric">Lord.</x-lyric>
</x-note>
```

Result:
<x-note>
<x-ison></x-ison>
<x-lyric slot="lyric">To</x-lyric>
</x-note>
<x-note>
<x-oligon></x-oligon>
<x-lyric slot="lyric">Thee,</x-lyric>
</x-note>
<x-note>
<x-ison></x-ison>
<x-lyric slot="lyric">O</x-lyric>
</x-note>
<x-note>
<x-apostrofos></x-apostrofos>
<x-lyric slot="lyric">Lord.</x-lyric>
</x-note>

### Melismas

Melismas can be displayed with the `x-melisma` component.

<!-- prettier-ignore -->
```html
<x-note>
  <x-oligon-kentimata-above></x-oligon-kentimata-above
  ><x-gorgon-above></x-gorgon-above>
  <x-lyric slot="lyric">Lord,</x-lyric>
  <x-melisma slot="melisma">____</x-melisma>
</x-note>
<x-apostrofos></x-apostrofos>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric slot="lyric">I</x-lyric>
</x-note>
```

<!-- prettier-ignore -->
Result:
<x-note>
  <x-oligon-kentimata-above></x-oligon-kentimata-above><x-gorgon-above class="gorgon"></x-gorgon-above>
  <x-lyric slot="lyric">Lord,</x-lyric>
  <x-melisma slot="melisma">___</x-melisma>
</x-note>
<x-apostrofos></x-apostrofos>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric slot="lyric">I</x-lyric>
</x-note>

#### Hyphenation

To display hyphenation, write out the desired number of spaces and hyphens inside the `x-melisma` component.

<!-- prettier-ignore -->
```html
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">Re</x-lyric>
  <x-melisma slot="melisma"> -</x-melisma>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">joice</x-lyric>
</x-note>
```

?> If your HTML editor automatically removes whitespace, then you may want to disable that feature, or use the `&nbsp;` character instead. E.g. `<x-melisma slot="melisma">&nbsp;-</x-melisma>`

<!-- prettier-ignore -->
Result: 
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">Re</x-lyric>
  <x-melisma slot="melisma"> -</x-melisma>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">joice</x-lyric>
</x-note>

Here's another example with more hyphens.

<!-- prettier-ignore -->
```html
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">Lord</x-lyric>
  <x-melisma slot="melisma">        -        -         -       </x-melisma>
</x-note>
<x-ison></x-ison><x-ison></x-ison><x-ison></x-ison><x-ison></x-ison>
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">joice</x-lyric>
</x-note>
```

<!-- prettier-ignore -->
Result:
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">Re</x-lyric>
  <x-melisma slot="melisma">        -        -         -       </x-melisma>
</x-note>
<x-ison></x-ison><x-ison></x-ison><x-ison></x-ison><x-ison></x-ison>
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">joice</x-lyric>
</x-note>

### Fixing Spacing

When playing lyrics under a <x-running-elafron></x-running-elafron> or under a neume that starts with a <x-vareia></x-vareia>, the lyrics need to be bumped to the right. This can be accomplished with two components: `x-spacer-apostrofos` and `x-spacer-vareia`.

<!-- prettier-ignore -->
```html
<x-note>
  <x-running-elafron></x-running-elafron>
  <x-lyric slot="lyric"><x-spacer-apostrofos></x-spacer-apostrofos>to</x-lyric>
</x-note>
```

<!-- prettier-ignore -->
Before:
<x-note>
  <x-running-elafron></x-running-elafron>
  <x-lyric slot="lyric">to</x-lyric>
</x-note>

<!-- prettier-ignore -->
After:
<x-note>
  <x-running-elafron></x-running-elafron>
  <x-lyric slot="lyric"><x-spacer-apostrofos></x-spacer-apostrofos>to</x-lyric>
</x-note>

## Fixing collisions

While SBMuFL fonts attempt to automatically align supporting neumes, sometimes collisions happen, especially if there are many supporting neumes on the same base neume. Or sometimes, you may simply want to reposition a supporting neume because you think it would look nicer somewhere else. To do this, we can use CSS styling.

<!-- prettier-ignore -->
Let's say that we think the following looks a little too crowded.
<x-oligon></x-oligon><x-fthora-enharmonic-above class="fthora"></x-fthora-enharmonic-above><x-ison-indicator-pa class="ison-indicator"></x-ison-indicator-pa>

Let's move the ison indicator a little to the left with the styling `position: relative; left: -1em;`.

<!-- prettier-ignore -->
```html
<x-oligon></x-oligon
><x-fthora-enharmonic-above></x-fthora-enharmonic-above
><x-ison-indicator-pa style="position: relative; left: -1em;"></x-ison-indicator-pa>
```

<!-- prettier-ignore -->
Result:
<x-oligon></x-oligon><x-fthora-enharmonic-above class="fthora"></x-fthora-enharmonic-above><x-ison-indicator-pa class="ison-indicator" style="position: relative; left: -1em"></x-ison-indicator-pa>

## Configuration & Styling

Any component may be styled with CSS, using the standard CSS properties. There are also several custom properties that may be used to apply styling.

| Custom Property               | Description                              |
| ----------------------------- | ---------------------------------------- |
| --byz-drop-cap-font-size      | Sets the font size for drop caps.        |
| --byz-drop-cap-offset-v       | Sets the vertical offset for drop caps.  |
| --byz-lyric-font-family       | Sets the font family for lyrics.         |
| --byz-lyric-font-size         | Sets the font size for lyrics.           |
| --byz-lyric-offset-h          | Sets the horizontal offset for lyrics.   |
| --byz-lyric-offset-v          | Sets the vertical offset for lyrics.     |
| --byz-neume-font-size         | Sets the font size for neumes.           |
| --byz-spacer-width-apostrofos | Sets the width of the apostrofos spacer. |
| --byz-spacer-width-vareia     | Sets the width of the vareia spacer.     |

Defaults for these custom properties may be defined in `:root` or `html` and they may be overridden at any scope.

<!-- prettier-ignore -->
```html
<x-ison></x-ison>
<x-ison style="--byz-neume-font-size: 15pt"></x-ison>
```

<!-- prettier-ignore -->
Result:
<x-ison></x-ison>
<x-ison style="--byz-neume-font-size: 15pt"></x-ison>
