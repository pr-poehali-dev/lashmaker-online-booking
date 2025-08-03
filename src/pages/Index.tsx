import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');

  const services = [
    { name: 'Классическое наращивание', price: '2500 ₽', duration: '2 часа' },
    { name: '2D наращивание', price: '3200 ₽', duration: '2.5 часа' },
    { name: '3D наращивание', price: '3800 ₽', duration: '3 часа' },
    { name: 'Голливудский объем', price: '4500 ₽', duration: '3.5 часа' },
    { name: 'Снятие ресниц', price: '800 ₽', duration: '30 мин' },
    { name: 'Коррекция', price: '1800 ₽', duration: '1.5 часа' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const portfolioImages = [
    '/img/16ba174d-b806-4edc-8f5d-2d0797c40e4b.jpg',
    '/img/98381911-5a70-4ef6-b3fb-d45b1cb3c406.jpg'
  ];

  const reviews = [
    { name: 'Анна К.', text: 'Невероятно красивые ресницы! Держатся уже месяц, выглядят естественно. Мастер профессионал!', rating: 5 },
    { name: 'Мария С.', text: 'Очень довольна результатом. Процедура прошла комфортно, ресницы получились именно такие, как я хотела.', rating: 5 },
    { name: 'Елена В.', text: 'Лучший lashmaker в городе! Всегда записываюсь только к ней. Качество на высоте!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">LashStudio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section id="home" className="relative bg-gradient-to-br from-secondary/20 to-background py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Идеальные ресницы
                <span className="text-primary block">для вашего образа</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональное наращивание ресниц с использованием премиальных материалов. 
                Создаю естественную красоту, которая подчеркивает вашу индивидуальность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg px-8 py-6">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться онлайн
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Онлайн запись</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Выберите услугу</Label>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service.name}>
                                {service.name} - {service.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Выберите дату</Label>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </div>
                      <div>
                        <Label>Выберите время</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Введите имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comments">Комментарий</Label>
                        <Textarea id="comments" placeholder="Дополнительные пожелания" />
                      </div>
                      <Button className="w-full">Подтвердить запись</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/16ba174d-b806-4edc-8f5d-2d0797c40e4b.jpg" 
                alt="Красивые наращенные ресницы"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Star" className="text-yellow-500" size={24} />
                  <div>
                    <div className="font-semibold">4.9/5</div>
                    <div className="text-sm text-muted-foreground">200+ отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/98381911-5a70-4ef6-b3fb-d45b1cb3c406.jpg" 
                alt="Студия lashmaker"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Привет! Меня зовут Анастасия, и я дипломированный lash-мастер с опытом работы более 5 лет. 
                Моя специализация — создание естественного и элегантного образа для каждой клиентки.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span>Сертифицированный мастер международного уровня</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span>Более 1000 довольных клиенток</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Heart" className="text-primary" size={24} />
                  <span>Индивидуальный подход к каждой клиентке</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span>100% стерильность и безопасность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Мои лучшие работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={image} 
                    alt={`Работа ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" className="text-white" size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги и цены */}
      <section id="services" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Услуги и цены</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг по наращиванию ресниц</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="secondary">{service.duration}</Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Записаться</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Запись на {service.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="p-4 bg-secondary/20 rounded-lg">
                          <p><strong>Услуга:</strong> {service.name}</p>
                          <p><strong>Цена:</strong> {service.price}</p>
                          <p><strong>Длительность:</strong> {service.duration}</p>
                        </div>
                        <div>
                          <Label>Выберите дату</Label>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border"
                          />
                        </div>
                        <div>
                          <Label>Выберите время</Label>
                          <Select value={selectedTime} onValueChange={setSelectedTime}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input id="name" placeholder="Введите имя" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" placeholder="+7 (___) ___-__-__" />
                        </div>
                        <Button className="w-full">Подтвердить запись</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы клиенток</h2>
            <p className="text-xl text-muted-foreground">Что говорят о моей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь со мной любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon name="Instagram" className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-muted-foreground">@lashstudio_anastasia</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon name="MapPin" className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">ул. Красивая, 15<br />г. Москва</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon name="Clock" className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Вс: 9:00-19:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">LashStudio</h3>
            <p className="text-muted mb-6">Создаем красоту, которая вдохновляет</p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={24} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={24} />
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-muted">
              <p className="text-sm text-muted">&copy; 2024 LashStudio. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;