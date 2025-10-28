<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormBuilderRequest;
use App\Http\Resources\FormBuilderResource;
use App\Models\Form;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;

class FormController extends Controller
{
    use HttpResponses;

    // list all forms
    public function index()
    {
        return FormBuilderResource::collection(Auth::user()->forms()->simplePaginate(20))
            ->additional([
                'success' => true,
                'message' => 'Forms Fetched Successfully',
            ]);
    }

    public function show(Form $form)
    {
        $this->IsNotAuthorized($form);

        return $this->success(
            FormBuilderResource::make($form),
            'Form Fetched Successfully',
        );
    }

    public function store(FormBuilderRequest $request)
    {
        $validated = $request->validated();

        $validated['user_id'] = Auth::user()->id;

        $form = Form::create($validated);

        $filePath = null;
        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('form_files', 'public');
        }

        $structure = [
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'website' => $request->input('website'),
            'dateOfBirth' => $request->input('dateOfBirth'),
            'country' => $request->input('country'),
            'file' => $filePath,
        ];

        $form->formStructures()->create([
            'structure' => json_encode($structure),
        ]);

        return $this->success(
            FormBuilderResource::make($form),
            'Form Created Successfully',
        );
    }

    public function update(FormBuilderRequest $request, Form $form)
    {

        $validated = $request->validated();

        $this->IsNotAuthorized($form);

        $form->update($validated);

        return $this->success(
            FormBuilderResource::make($form),
            'Form Updated Successfully',
        );
    }

    public function destroy(Form $form)
    {
        $this->IsNotAuthorized($form);

        $form->delete();

        return $this->success(
            '',
            'Form Deleted Successfully',
        );
    }

    private function IsNotAuthorized($form)
    {
        if (Auth::user()->id !== intval($form->user_id)) {
            return $this->error('', 'Unauthorized Action', 403);
        }
    }
}
