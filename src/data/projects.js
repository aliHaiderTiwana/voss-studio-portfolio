// Import each photo — Vite will bundle, hash, and optimize these.
import liveEdgeConsole from '../assets/projects/live-edge-console.jpg'
import dovetailChest from '../assets/projects/dovetail-chest.jpg'
import bentLamChair from '../assets/projects/bent-lam-chair.jpg'
import trestleTable from '../assets/projects/trestle-table.jpg'

export const projects = [
  {
    id: 'live-edge-console',
    title: 'Live-Edge Console',
    material: 'Walnut',
    year: 2025,
    blurb: 'A single slab console, finished to keep the bark-edge silhouette intact.',
    image: liveEdgeConsole,
  },
  {
    id: 'dovetail-chest',
    title: 'Dovetail Chest',
    material: 'White Oak',
    year: 2024,
    blurb: 'Hand-cut dovetails, no fasteners — joinery does all the holding.',
    image: dovetailChest,
  },
  {
    id: 'bent-lam-chair',
    title: 'Bent-Lamination Chair',
    material: 'Ash',
    year: 2024,
    blurb: 'Steam-bent laminations shaped over a form built for this one commission.',
    image: bentLamChair,
  },
  {
    id: 'trestle-table',
    title: 'Trestle Table',
    material: 'Cherry',
    year: 2023,
    blurb: 'A through-wedged trestle base, sized for a family of six.',
    image: trestleTable,
  },
]
