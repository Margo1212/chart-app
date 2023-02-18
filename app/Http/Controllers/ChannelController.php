<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ChannelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $channels = Channel::all();
        return Inertia::render('MainPage', [
            'channels' => $channels
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render("Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $channel = new channel();
        $data = array(
            'name' => $request->input('name'),
            'amount' => $request->input('amount'),
        );
        $channel->create($data);
        session()->flash('success');

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Channel $channel): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): Response
    {
        $channel = Channel::find($id);
        return Inertia::render('Edit', ['channel'=>$channel]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id): RedirectResponse
    {
        $channel = Channel::findOrFail($id);
        $channel->name = $request->input('name');
        $channel->amount = $request->input('amount');

        $channel->save();
        session()->flash('success', 'Channel updated');
        return redirect('/');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): RedirectResponse
    {
        $channel = Channel::findOrFail($id);
        $channel->delete();
        session()->flash('success', 'Channel deleted');
        return redirect('/');
    }
}
