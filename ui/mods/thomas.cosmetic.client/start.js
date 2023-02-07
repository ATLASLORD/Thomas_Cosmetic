try
{
    function audioModdingTest()
    {
        api.audio.registerCueMod('/Music/Main_Menu_Music_return_from_game', '/ui/mods/thomas.cosmetic.client/04.ogg');
    }

    _.defer(audioModdingTest); // hack relies on synchronous code to defer register until after reset
}
catch (e)
{
    console.error(e);
}