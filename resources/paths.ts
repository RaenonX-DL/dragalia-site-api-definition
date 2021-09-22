// NEXT_PUBLIC_* for the use of the frontend
if (!process.env.NEXT_PUBLIC_RESOURCE_ROOT) {
  throw new Error('Specify `NEXT_PUBLIC_RESOURCE_ROOT` as the root of the resources ends w/o slash.');
}
if (!process.env.NEXT_PUBLIC_DEPOT_ROOT) {
  throw new Error('Specify `NEXT_PUBLIC_DEPOT_ROOT` as the root of the depot URL ends w/o slash.');
}
if (!process.env.NEXT_PUBLIC_AUDIO_ROOT) {
  throw new Error('Specify `NEXT_PUBLIC_AUDIO_ROOT` as the root of the audio depot URL ends w/o slash.');
}

export * from './paths/depot';
export * from './paths/resource';
export * from './paths/audio';
