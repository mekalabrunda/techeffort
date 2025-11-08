import LogoTile from '../components/ui/LogoTile'

/*
  Customers logos grid

  Put your customer logo image files in: src/assets/customers/
  and name them to match the `files` array below (png/jpg/svg allowed).

  Example filenames (based on provided attachments):
    wells-fargo.png
    california-child-support.png
    gap.png
    informatica.png
    meta.png
    marshmclennan.png
    scripps.png
    timesheets.png
    wellma.png

  If an image file is missing the tile will fall back to the label text.
*/

export default function Customers() {
  // filenames currently present in src/assets/customers
  const files = [
    'wf.png',
    'dcss.png',
    'gap.png',
    'infa.png',
    'meta.png',
    'mmc.png',
    'scr.png',
    'ts.png',
    'wellma.png',
  ]

  const labels = [
    'WELLS FARGO',
    'CA Dept. Child Support',
    'GAP',
    'Informatica',
    'Meta',
    'MarshMcLennan',
    'Scripps',
    'Timesheets.com',
    'Wellma',
  ]

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
      {files.map((f, i) => {
        // construct a runtime URL to the asset; if the file is missing the image will 404
        // LogoTile handles onError and will display the label instead
        let src: string | undefined
        try {
          // Vite-friendly asset URL
          src = new URL(`../assets/customers/${f}`, import.meta.url).href
        } catch (e) {
          src = undefined
        }

        return (
          <div key={f} className="flex items-center justify-center">
            <LogoTile label={labels[i] ?? f} src={src} />
          </div>
        )
      })}
    </div>
  )
}
