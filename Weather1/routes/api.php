Route::get("/test-me", function () {
    return 'Hello from Laravel!';
});

Ruse Illuminate\Support\Facades\Http;

Route::get('/weather', function () {
    $apiKey = env('VUE_APP_OPENWEATHERMAP_API_KEY');
    $city = 'London';
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";
    
    $response = Http::get($url);

    if ($response->successful()) {
        Log::info($response->body());
        return $response->json();
    } else {
        return response()->json(['error' => 'Failed to fetch weather data'], 500);
    }
});

