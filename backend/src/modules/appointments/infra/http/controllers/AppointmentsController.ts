import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { parseISO } from 'date-fns';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate,
    });

    return res.json(appointment);
  }
}
