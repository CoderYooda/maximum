<?php

namespace App\Console\Commands;

use App\Models\Front\ModuleTemplate;
use Illuminate\Console\Command;
use File;

class FreshTemplates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'templates:fresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $temp = 'maximum';
        $templates = File::allFiles(public_path('/templates/' . $temp . '/modules'));
        foreach($templates as $template){
            $file = File::get($template);
            $name = explode('.', basename($template))[0];

            $template = ModuleTemplate::firstOrNew(['name' => $name]);
            $template->html = $file;
            $template->save();
        }
    }
}
