<link rel="stylesheet" href="index.css" />

# ByzHtml

A library of custom web components for displaying Byzantine Chant neumes in HTML.

<div class="example">
    <x-drop-cap>Κ</x-drop-cap>
    <x-note>
      <x-petasti></x-petasti>
      <x-lyric slot="lyric">υ</x-lyric>
    </x-note>
    <x-note>
      <x-apostrofos></x-apostrofos>
      <x-lyric slot="lyric">ρι</x-lyric>
    </x-note>
    <x-note>
      <x-ison></x-ison>
      <x-lyric slot="lyric">ε</x-lyric>
    </x-note>
    <x-note>
      <x-oligon></x-oligon>
      <x-lyric slot="lyric">ε</x-lyric>
    </x-note>
    <x-note>
      <x-oligon></x-oligon><x-psifiston></x-psifiston
      ><x-klasma-above></x-klasma-above>
      <x-lyric slot="lyric">κε</x-lyric>
    </x-note>
    <x-note>
      <x-apostrofos></x-apostrofos><x-klasma-above></x-klasma-above>
      <x-lyric slot="lyric">κρα</x-lyric>
    </x-note>
    <x-note>
      <x-apostrofos></x-apostrofos><x-antikenoma></x-antikenoma><x-apli></x-apli>
      <x-lyric slot="lyric">ξα</x-lyric>
    </x-note>
    <x-note>
      <x-apostrofos></x-apostrofos><x-gorgon-above class="gorgon"></x-gorgon-above>
      <x-lyric slot="lyric">α</x-lyric>
    </x-note>
    <x-note>
      <x-vareia></x-vareia><x-ison></x-ison>
      <x-lyric slot="lyric"><x-spacer-vareia></x-spacer-vareia>προ</x-lyric>
    </x-note>
    <x-note>
      <x-apostrofos></x-apostrofos><x-gorgon-above class="gorgon"></x-gorgon-above>
      <x-lyric slot="lyric">ο</x-lyric>
    </x-note>
    <x-note>
      <x-oligon></x-oligon>
      <x-lyric slot="lyric">ος</x-lyric>
    </x-note>
    <x-note>
      <x-petasti-oligon></x-petasti-oligon>
      <x-lyric slot="lyric">σε</x-lyric>
    </x-note>
    <x-note>
      <x-apostrofos></x-apostrofos><x-klasma-above></x-klasma-above>
      <x-lyric slot="lyric">ε</x-lyric> </x-note
    ><x-martyria>
      <x-martyria-note-pa></x-martyria-note-pa
      ><x-martyria-alpha-below></x-martyria-alpha-below
    ></x-martyria>
</div>

Source:

```html
<x-drop-cap>Κ</x-drop-cap>
<x-note>
  <x-petasti></x-petasti>
  <x-lyric slot="lyric">υ</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric slot="lyric">ρι</x-lyric>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric slot="lyric">ε</x-lyric>
</x-note>
<x-note>
  <x-oligon></x-oligon>
  <x-lyric slot="lyric">ε</x-lyric>
</x-note>
<x-note>
  <x-oligon></x-oligon><x-psifiston></x-psifiston
  ><x-klasma-above></x-klasma-above>
  <x-lyric slot="lyric">κε</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos><x-klasma-above></x-klasma-above>
  <x-lyric slot="lyric">κρα</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos><x-antikenoma></x-antikenoma><x-apli></x-apli>
  <x-lyric slot="lyric">ξα</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos><x-gorgon-above class="gorgon"></x-gorgon-above>
  <x-lyric slot="lyric">α</x-lyric>
</x-note>
<x-note>
  <x-vareia></x-vareia><x-ison></x-ison>
  <x-lyric slot="lyric"><x-spacer-vareia></x-spacer-vareia>προ</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos><x-gorgon-above class="gorgon"></x-gorgon-above>
  <x-lyric slot="lyric">ο</x-lyric>
</x-note>
<x-note>
  <x-oligon></x-oligon>
  <x-lyric slot="lyric">ος</x-lyric>
</x-note>
<x-note>
  <x-petasti-oligon></x-petasti-oligon>
  <x-lyric slot="lyric">σε</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos><x-klasma-above></x-klasma-above>
  <x-lyric slot="lyric">ε</x-lyric> </x-note
><x-martyria>
  <x-martyria-note-pa></x-martyria-note-pa
  ><x-martyria-alpha-below></x-martyria-alpha-below
></x-martyria>
```

## Examples

See the [examples](https://github.com/danielgarthur/byzhtml/blob/master/examples) folder.
