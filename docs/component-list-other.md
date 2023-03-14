<style>
td {
    --byz-neume-font-size: 20pt;
}
</style>

# Other Components

| Component           | Description                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-drop-cap          | Displays a drop cap.                                                                                                                                                   |
| x-lyric             | Displays lyrics. This is intended to be used as a child of an `x-note`.                                                                                                |
| x-melisma           | Displays a melisma after an `x-lyric`. This is intended to be used as a child of an `x-note`.                                                                          |
| x-martyria          | Wraps martyria neumes together                                                                                                                                         |
| x-neume             | Displays the neume specified by the `name` attribute.                                                                                                                  |
| x-note              | Wraps a quantitative neume together with its supporting characters and lyrics.                                                                                         |
| x-spacer            | Adds space between any two components. Can be used to provide a little bit of extra space here and there as necessary.                                                 |
| x-spacer-apostrofos | Adds a space equal to the width of the apostrofos in the running elafron. This is used adjust lyrics underneath a running elafron so that they are centered correctly. |
| x-spacer-vareia     | Adds a space equal to the width of the vareia. This is used adjust lyrics underneath a neume that starts with a vareia so that they are centered correctly. correctly. |
