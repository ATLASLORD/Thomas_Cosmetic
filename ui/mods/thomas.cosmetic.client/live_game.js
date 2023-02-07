try
{
    function audioModdingTest()
    {
      var dir = '/ui/mods/thomas.cosmetic.client/';
      
      var launch =
      [
        '01.ogg',
        '02.ogg'
      ];
      
      var battle =
      [
        '03.ogg',
        '04.ogg',
        '05.ogg',
        '07.ogg'
      ];

      var base =
      [
        '08.ogg',
        '09.ogg',
        '10.ogg',
        '11.ogg',
        '12.ogg',
        '13.ogg'
      ];

      //Varied music
      api.audio.registerCueMod('/Music/Music_Launch_Commander_spectating', dir + _.sample(launch));
      api.audio.registerCueMod('/Music/Music_Launch_Commander', dir + _.sample(launch));
      api.audio.registerCueMod('/Music/Music_Battle', dir + _.sample(battle));
      api.audio.registerCueMod('/Music/Music_Base', dir + _.sample(base));

      //Win & Lose music
      api.audio.registerCueMod('/Music/Music_Gameover_Win', dir + '06.ogg');
      api.audio.registerCueMod('/Music/Music_GW_Win', dir + '06.ogg');

      api.audio.registerCueMod('/Music/Music_Gameover_Lose', dir + '13.ogg');
      api.audio.registerCueMod('/Music/Music_Commander_Death', dir + '13.ogg');
      api.audio.registerCueMod('/Music/Music_Commander_Death_alliance_limbo', dir + '13.ogg');
      api.audio.registerCueMod('/Music/Music_GW_Lose', dir + '13.ogg');
      
      //Planet music
      api.audio.registerCueMod('/Music/Music_Planet_Load_Ice', dir + '17.ogg');
      api.audio.registerCueMod('/Music/Music_Planet_Load_Metal', dir + '16.ogg');
      api.audio.registerCueMod('/Music/Music_Planet_Load_Tropical', dir + '15.ogg');
      api.audio.registerCueMod('/Music/Music_Planet_Load_Lava', dir + '14.ogg');
      api.audio.registerCueMod('/Music/Music_Planet_Load_Earth', dir + '16.ogg');
      api.audio.registerCueMod('/Music/Music_Planet_Load_Moon', dir + '15.ogg');
      api.audio.registerCueMod('/Music/Music_Planet_Load_water', dir + '12.ogg');

    }
    _.defer(audioModdingTest); // hack relies on synchronous code to defer register until after reset
}
catch (e)
{
  console.error(e);
}