<?php

use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dt = now();
        $dateNow = $dt->toDateTimeString();
        $projects = [
            [
                'project_code' => 'PJ-01',
                'project_title'=>'45 Street project',
                'project_description' => 'CM ဖြင့် ဆက်သွယ်ဆောင်ရွက်ခြင်းနှင့် CM ၏ မှတ်ချက်များ ၊ ညွှန်ကြားချက်များ',
                'project_region' => 'Yangon',
                'project_startDate'=>'31-3-2020',
                'project_endDate' => '31-6-2020',
                'created_at' => $dateNow,
                'updated_at' => $dateNow
            ]
        ];
        DB::table('projects')->insert($projects);
    }
}
