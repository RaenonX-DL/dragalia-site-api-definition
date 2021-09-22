/**
 * Class for audio paths.
 */
export class AudioPaths {
  static ROOT = process.env.NEXT_PUBLIC_AUDIO_ROOT;

  static AUDIO_DIR = AudioPaths.ROOT + '/audio';

  /**
   * Get the URL of a story voice.
   *
   * Note that `voicePath` should have `.wav` post-fixed.
   *
   * @param {'en_us' | 'ja_jp'} lang language of the voice
   * @param {string} voicePath path of the voice rooted from the story voice directory
   * @return {string} URL of the story voice
   */
  static getStoryVoiceURL(lang: 'en_us' | 'ja_jp', voicePath: string): string {
    return `${AudioPaths.AUDIO_DIR}/localize/${lang}/sound/v/story/${voicePath}`;
  }
}
