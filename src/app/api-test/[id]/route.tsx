export async function GET(request: Request, { params }: { params: { id: string } }) { 
    return Response.json(
    { 
      name: "Notty",
      id: params.id
    })
  }